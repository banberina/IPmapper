
const request = require("supertest");
const app = require("../index.js");
describe("Basic IP data tests", () => {

    it("should return the version of the app", async () => {
        const res = await request(app)
            .get("/version")
        expect(res.body.app_name).toEqual("IPmapper")
        expect(res.body.version).toEqual("v1.0.0")
         expect(res.statusCode)
             .toEqual(200); 
    })

    it("should return ip geo info", async () => {
        const res = await request(app)
            .get("/geo/1.0.88.0")
        expect(res.body.country).toEqual("Japan")
        expect(res.body.city).toEqual("Okayama")        
        expect(res.body.lat).toEqual("34.65")        
        expect(res.body.lon).toEqual("133.917")        
        expect(res.statusCode)
             .toEqual(200); 
    })

    it("should return ip proxy info", async () => {
        const res = await request(app)
            .get("/proxy/1.0.0.112")
        expect(res.body.proxytype).toEqual("PUB")
        expect(res.body.city).toEqual("Los Angeles")    
        expect(res.body.isp).toEqual("APNIC and CloudFlare DNS Resolver Project")            
        expect(res.body.domain).toEqual("cloudflare.com")        
        expect(res.statusCode)
             .toEqual(200); 
    })

    it("should return ip proxy info", async () => {
        const res = await request(app)
            .get("/asn/1.0.4.0")
        expect(res.body.asn).toEqual("56203")
        expect(res.body.company).toEqual("Gtelecom-AUSTRALIA")           
        expect(res.statusCode)
             .toEqual(200); 
    })

})
