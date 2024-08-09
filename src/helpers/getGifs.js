export const getGif = async(category)=>{
   const API_KEY = `LIVDSRZULELA`
   const url = `https://g.tenor.com/v1/search?q=${category}&key=${API_KEY}&limit=10`
   const resp = await fetch(url);
   const {results} = await resp.json();
   
   const gifsAll = results.map(img => ({
      id: img.id,
      description: img.content_description,
      url: img.media[0].mediumgif.url
   }));

   return gifsAll;
}