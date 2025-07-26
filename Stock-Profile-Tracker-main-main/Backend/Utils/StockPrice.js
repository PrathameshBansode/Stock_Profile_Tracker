import axios from 'axios';
import * as cheerio from 'cheerio';

const StockPrice = async (req, res) => {
  const { symbol } = req.query;
  const url = `https://www.google.com/finance/quote/${symbol}:NSE`;

  try {
    const response = await axios.get(url);

    const $ = cheerio.load(response.data);

    const stockPrice = $('.YMlKec.fxKbKc').text().trim(); 

    const prevClose = $('.gyFHrc').eq(0).find('.P6K39c').text().trim();  
    const todayRange = $('.gyFHrc').eq(1).find('.P6K39c').text().trim(); 
    const yearRange = $('.gyFHrc').eq(2).find('.P6K39c').text().trim();   
    const marketCap = $('.gyFHrc').eq(3).find('.P6K39c').text().trim();   
    const peRatio = $('.gyFHrc').eq(5).find('.P6K39c').text().trim();     
    const avgVolume = $('.gyFHrc').eq(6).find('.P6K39c').text().trim();    
    const dividendYield = $('.gyFHrc').eq(7).find('.P6K39c').text().trim(); 
    const primaryExchange = $('.gyFHrc').eq(8).find('.P6K39c').text().trim(); 

    console.log('Stock Price:', stockPrice);
    console.log('Previous Close:', prevClose);
    console.log('Today\'s Range:', todayRange);
    console.log('Yearly Range:', yearRange);
    console.log('Market Cap:', marketCap);
    console.log('P/E Ratio:', peRatio);
    console.log('Average Volume:', avgVolume);
    console.log('Dividend Yield:', dividendYield);
    console.log('Primary Exchange:', primaryExchange);

    res.json({
      stockPrice,
      prevClose,
      todayRange,
      yearRange,
      marketCap,
      peRatio,
      avgVolume,
      dividendYield,
      primaryExchange
    });

  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching data');
  }
};

export default StockPrice;
