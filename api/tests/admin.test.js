const request = require("supertest");
const app = require("../index.js");
const jwt = require("jsonwebtoken");
const config = require("../config.js");
describe("Admin routes tests", () => {
    it("should return asn data", async () => {
        const res = await request(app)
            .get("/admin/asn")
            .set({ Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDNlODg2MmRjYzAyYjU1Yzk0ZTY3MiIsImVtYWlsIjoiYmVyaW5hLmJhbmRpY0BzdHUuaWJ1LmVkdS5iYSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJuYW1lIjoiQmVyaW5hIEJhbmRpxIciLCJnaXZlbl9uYW1lIjoiQmVyaW5hIiwiZmFtaWx5X25hbWUiOiJCYW5kacSHIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21COFlPcUZqLVpHdlhQUjRPNHY2dVphaEFncllJV21fOWpiWjNKYiIsImxvY2FsZSI6ImVuIiwiaGQiOiJzdHUuaWJ1LmVkdS5iYSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU3ODMzMjMyNn0.obrs8KBS0W0WOejh5W1QTs8yeK7kiH6JVE8aEeNmoWc" })
        let obj = res.body
        expect(obj[0].asn).toEqual("-")
        expect(obj[0].company).toEqual("-")
        expect(obj[3].asn).toEqual("23969")
        expect(obj[3].company).toEqual("TOT Public Company Limited")
        expect(res.statusCode).toEqual(200);
    })

    it("should return geo data", async () => {
        const res = await request(app)
            .get("/admin/geo")
            .set({ Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDNlODg2MmRjYzAyYjU1Yzk0ZTY3MiIsImVtYWlsIjoiYmVyaW5hLmJhbmRpY0BzdHUuaWJ1LmVkdS5iYSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJuYW1lIjoiQmVyaW5hIEJhbmRpxIciLCJnaXZlbl9uYW1lIjoiQmVyaW5hIiwiZmFtaWx5X25hbWUiOiJCYW5kacSHIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21COFlPcUZqLVpHdlhQUjRPNHY2dVphaEFncllJV21fOWpiWjNKYiIsImxvY2FsZSI6ImVuIiwiaGQiOiJzdHUuaWJ1LmVkdS5iYSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU3ODMzMjMyNn0.obrs8KBS0W0WOejh5W1QTs8yeK7kiH6JVE8aEeNmoWc" })
        let obj = res.body
        expect(obj[0].country).toEqual("Japan")
        expect(obj[0].region).toEqual("Yamaguchi")
        expect(obj[0].lat).toEqual("34.183")
        expect(obj[0].lon).toEqual("131.467")
        expect(obj[0].zipcode).toEqual("754-0893")
        expect(obj[3].country).toEqual("Japan")
        expect(obj[3].region).toEqual("Tottori")
        expect(obj[3].lat).toEqual("35.433")
        expect(obj[3].lon).toEqual("133.333")
        expect(obj[3].zipcode).toEqual("683-0846")
        expect(obj[5].country).toEqual("Japan")
        expect(obj[5].region).toEqual("Okayama")
        expect(obj[5].lat).toEqual("34.65")
        expect(obj[5].lon).toEqual("133.917")
        expect(obj[5].zipcode).toEqual("700-0824")
        
        expect(res.statusCode).toEqual(200);
    })

    it("should return geoipv6 data", async () => {
        const res = await request(app)
            .get("/admin/geoipv6")
            .set({ Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDNlODg2MmRjYzAyYjU1Yzk0ZTY3MiIsImVtYWlsIjoiYmVyaW5hLmJhbmRpY0BzdHUuaWJ1LmVkdS5iYSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJuYW1lIjoiQmVyaW5hIEJhbmRpxIciLCJnaXZlbl9uYW1lIjoiQmVyaW5hIiwiZmFtaWx5X25hbWUiOiJCYW5kacSHIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21COFlPcUZqLVpHdlhQUjRPNHY2dVphaEFncllJV21fOWpiWjNKYiIsImxvY2FsZSI6ImVuIiwiaGQiOiJzdHUuaWJ1LmVkdS5iYSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU3ODMzMjMyNn0.obrs8KBS0W0WOejh5W1QTs8yeK7kiH6JVE8aEeNmoWc" })
        let obj = res.body
        expect(obj[1].country).toEqual("Japan")
        expect(obj[1].region).toEqual("Tottori")
        expect(obj[1].lat).toEqual("35.433")
        expect(obj[1].lon).toEqual("133.817")
        expect(obj[1].zipcode).toEqual("682-0021")
        expect(obj[5].country).toEqual("-")
        expect(obj[5].region).toEqual("-")
        expect(obj[5].lat).toEqual("0")
        expect(obj[5].lon).toEqual("0")
        expect(obj[5].zipcode).toEqual("-")
        
        expect(res.statusCode).toEqual(200);
    })

    it("should return proxy data", async () => {
        const res = await request(app)
            .get("/admin/proxy")
            .set({ Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDNlODg2MmRjYzAyYjU1Yzk0ZTY3MiIsImVtYWlsIjoiYmVyaW5hLmJhbmRpY0BzdHUuaWJ1LmVkdS5iYSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJuYW1lIjoiQmVyaW5hIEJhbmRpxIciLCJnaXZlbl9uYW1lIjoiQmVyaW5hIiwiZmFtaWx5X25hbWUiOiJCYW5kacSHIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21COFlPcUZqLVpHdlhQUjRPNHY2dVphaEFncllJV21fOWpiWjNKYiIsImxvY2FsZSI6ImVuIiwiaGQiOiJzdHUuaWJ1LmVkdS5iYSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU3ODMzMjMyNn0.obrs8KBS0W0WOejh5W1QTs8yeK7kiH6JVE8aEeNmoWc" })
        let obj = res.body
        expect(obj[1].country).toEqual("United States")
        expect(obj[1].region).toEqual("California")
        expect(obj[1].proxytype).toEqual("PUB")
        expect(obj[1].domain).toEqual("cloudflare.com")
        expect(obj[1].isp).toEqual("APNIC and CloudFlare DNS Resolver Project")
        expect(obj[3].country).toEqual("United States")
        expect(obj[3].region).toEqual("California")
        expect(obj[3].proxytype).toEqual("PUB")
        expect(obj[3].domain).toEqual("cloudflare.com")
        expect(obj[3].isp).toEqual("APNIC and CloudFlare DNS Resolver Project")
        
        expect(res.statusCode).toEqual(200);
    })
    

    it("should return list of users", async () => {
        const res = await request(app)
            .get("/admin/users")
            .set({ Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDNlODg2MmRjYzAyYjU1Yzk0ZTY3MiIsImVtYWlsIjoiYmVyaW5hLmJhbmRpY0BzdHUuaWJ1LmVkdS5iYSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJuYW1lIjoiQmVyaW5hIEJhbmRpxIciLCJnaXZlbl9uYW1lIjoiQmVyaW5hIiwiZmFtaWx5X25hbWUiOiJCYW5kacSHIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21COFlPcUZqLVpHdlhQUjRPNHY2dVphaEFncllJV21fOWpiWjNKYiIsImxvY2FsZSI6ImVuIiwiaGQiOiJzdHUuaWJ1LmVkdS5iYSIsImV4cCI6MTU5MzgyODIyMiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNTc4MzMxOTcwfQ.eluhnRoqQx7GzucMRTjwrOQp9Ho-_8dvvS6PImu9f_Q" })
        let obj = res.body
        expect(obj[0].email).toEqual("berina.bandic@gmail.com")
        expect(obj[1].email).toEqual("berina.bandic@stu.ibu.edu.ba")
        expect(obj[1].type).toEqual("admin")
        expect(res.statusCode).toEqual(200);
    })


    it("should add a new asn record", async () => {
        const res = await request(app)
            .post("/admin/asn")
            .set({ Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDNlODg2MmRjYzAyYjU1Yzk0ZTY3MiIsImVtYWlsIjoiYmVyaW5hLmJhbmRpY0BzdHUuaWJ1LmVkdS5iYSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJuYW1lIjoiQmVyaW5hIEJhbmRpxIciLCJnaXZlbl9uYW1lIjoiQmVyaW5hIiwiZmFtaWx5X25hbWUiOiJCYW5kacSHIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21COFlPcUZqLVpHdlhQUjRPNHY2dVphaEFncllJV21fOWpiWjNKYiIsImxvY2FsZSI6ImVuIiwiaGQiOiJzdHUuaWJ1LmVkdS5iYSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU3ODMzMjMyNn0.obrs8KBS0W0WOejh5W1QTs8yeK7kiH6JVE8aEeNmoWc" })
            .send(asnModel)
        expect(res.statusCode)
            .toEqual(200);

        if (res.statusCode == 200) {
            await request(app)
                .delete("/admin/removetestasn");
        }

    })

     it("should edit existing asn record (change of company name)", async () => {
        asnModel.company="Some random company"
        const res = await request(app)
       
            .put("/admin/asn/5db80c9cbd6c4457a41a961f")
            .set({ Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZDNlODg2MmRjYzAyYjU1Yzk0ZTY3MiIsImVtYWlsIjoiYmVyaW5hLmJhbmRpY0BzdHUuaWJ1LmVkdS5iYSIsInZlcmlmaWVkX2VtYWlsIjp0cnVlLCJuYW1lIjoiQmVyaW5hIEJhbmRpxIciLCJnaXZlbl9uYW1lIjoiQmVyaW5hIiwiZmFtaWx5X25hbWUiOiJCYW5kacSHIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21COFlPcUZqLVpHdlhQUjRPNHY2dVphaEFncllJV21fOWpiWjNKYiIsImxvY2FsZSI6ImVuIiwiaGQiOiJzdHUuaWJ1LmVkdS5iYSIsInR5cGUiOiJhZG1pbiIsImlhdCI6MTU3ODMzMjMyNn0.obrs8KBS0W0WOejh5W1QTs8yeK7kiH6JVE8aEeNmoWc" })
           .send(asnModel)
           expect(res.body.model.company)
        .toEqual(asnModel.company)
        expect(res.statusCode)
            .toEqual(200);

        if (res.statusCode == 200) {
            await request(app)
                .delete("/admin/removetestasn");
        }

    }); 


});

const asnModel = {
    _id: 1,
    ipfrom: 4946454,
    ipto: 4946456,
    asn: "133144535",
    company: "CloudFlare Inc"
};