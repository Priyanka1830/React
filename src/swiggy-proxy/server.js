import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/restaurants", async (req, res) => {
  try {
    const { lat, lng, collection } = req.query;

    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.903942110837612&lng=77.57556796073914&collection=83634&tags=layout_CCS_SouthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json, text/plain, */*",
        Referer: "https://www.swiggy.com/",
      },
    });

    const text = await response.text();
    console.log("Swiggy response (first 500 chars):", text.slice(0, 500));

    const data = JSON.parse(text); // throws error if HTML received
    res.json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: "Failed to fetch Swiggy API" });
  }
});

app.listen(5000, () =>
  console.log("✅ Proxy server running on http://localhost:5000")
);
