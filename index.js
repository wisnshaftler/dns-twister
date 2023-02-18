import express from "express";
import dns from "node:dns/promises";
import cors from "cors";
import dotenv from "dotenv";
import twister from "./twister.mjs";

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json({ limit:"50mb"}));

const serverPort = process.env.SERVER_PORT || 4000;

server.post("/domain/twist", (req, res) => {
    const domain = req.body.domain?.trim();

    if (domain == "" || !domain) {
        return res.send({ status: 0, msg: "Domain is invalid.", data: [] });
    }

    //generate twists
    twister.clearTwisted();
    const twistList = twister.longTwist(domain);

    console.log(twistList.length);

    res.send({ status: 1, msg: "Done", data: twistList });
});

server.post("/domain/dnsdata", async (req, res) => {
    const domain = req.body.domain;

    let ipv4 = [];
    let ipv6 = [];
    let mx = [];
    let ns = [];
    let txt = [];
    try {
        ipv4 = await dns.resolve(domain, "A");
    } catch (e) {

    }
    try {
        ipv6 = await dns.resolve(domain, "AAAA");
    } catch (e) {
    }
    try {
        mx = await dns.resolve(domain, "MX")
    } catch (e) {
    }
    try {
        ns = await dns.resolve(domain, "NS");
    } catch (e) {
    }
    try {
        txt = await dns.resolve(domain, "TXT");

    } catch (e) {
    }

    res.send({ ipv4, ipv6, mx, ns, txt });
    return;
})


server.listen(serverPort, (e) => { console.log(`Server is running in port ${serverPort}`) });