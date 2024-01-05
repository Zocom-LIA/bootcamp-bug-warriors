export type ChuckNorrisResponse = {
    icon_url: string;
    id: string;
    url: string;
    value: string;
  };
  
  export const useData = () => {
    return {
      async fetchQuote(): Promise<ChuckNorrisResponse | void> {
        try {
          const URL = "https://api.chucknorris.io/jokes/random";
          const resp = await fetch(URL);
          return await resp.json();
        } catch (error) {
          console.error(error);
        }
      },
    };
  };
  