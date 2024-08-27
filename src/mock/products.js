import plasmaTv from '../assets/images/plasmaTV.jpg';
import actionMan from '../assets/images/actionMan.jpg';
import airTransport from '../assets/images/airTransport.jpg';
import phone from '../assets/images/phone.jpg';
import recordPlayer from '../assets/images/mpsplayer.jpg';
import btSpeakers from '../assets/images/btspeaker.jpg';
import drawningTablet from '../assets/images/drawingTab.jpg';


const getRandomInt = (min, max)=>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

export const products = [{
    name : "plasma_tv",
    prodcutCode : "pltv12",
    retailPrice : 150,
    unitsSold : 1300,
    data : [Array.from({length: 12}, () =>getRandomInt(0, 100))],
    src : plasmaTv
},
{
    name : "action_man",
    prodcutCode : "actmn",
    retailPrice : 20,
    unitsSold : 5000,
    data : [Array.from({length: 12}, () =>getRandomInt(0, 450))],
    src : actionMan
},
{
    name : "air_transport",
    prodcutCode : "fun13",
    retailPrice : 1000,
    unitsSold : 3000,
    data : [Array.from({length: 12}, () =>getRandomInt(0, 200))],
    src : airTransport
},
{   name : "phone",
    prodcutCode : "phone",
    retailPrice : 60,
    unitsSold : 1100,
    data : [Array.from({length: 12}, () =>getRandomInt(0, 280))],
    src : phone
},
{
    name : "bluetooth_speaker",
    prodcutCode : "btspk",
    retailPrice : 40,
    unitsSold : 2500,
    data : [Array.from({length: 12}, () =>getRandomInt(0, 450))],
    src : btSpeakers
},{
    name : "record_player",
    prodcutCode : "rec10",
    retailPrice : 55,
    unitsSold : 1300,
    data : [Array.from({length: 12}, () =>getRandomInt(0, 20))],
    src : recordPlayer
}, {
    name : "drawing_tablet",
    prodcutCode : "drwtb",
    retailPrice : 40,
    unitsSold : 2300,
    data : [Array.from({length: 12}, () =>getRandomInt(0, 20))],
    src : drawningTablet
}]

export const orders = [{
    totalVal : 15000000,
    totalOrders : 25000,
    topCountry : "Spain",
    shippingCost : 500000,
    avgOrder : 50.60,
    newCustomers : 1000,
    oneTimeBuyers : 750,
    outletPurchases : 14000,
    onlineStorePurchases: 11000,
    numOnlineCustomers : 7250,
    monthlyData : [200000, 40000, 120000, 500000, 320000, 175000, 250000, 45000, 455555, 340000,760000, 1000000]
},]