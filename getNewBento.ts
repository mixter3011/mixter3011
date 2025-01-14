const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=sabyasachi&g=mixter3011&x=SENachi27&l=fobic&i=https%3A%2F%2Fpbs.twimg.com%2Fprofile_banners%2F1708839251503468544%2F1711200101%2F1500x500&p=https%3A%2F%2Fsenachi-portfolio.vercel.app&z=36a22";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
