import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './ScrollAnimations';
import olivesImage from '@/assets/product-olives.jpg';
import datesImage from '@/assets/product-dates.jpg';
import datesImage1 from '@/assets/product-dates-1.jpg';
import datesImage2 from '@/assets/product-dates-2.jpg';
import datesImage3 from '@/assets/product-dates-3.jpeg';
import degletNourDatesImage1 from '@/assets/Deglet-Nour -Dates-1.jpg';
import degletNourDatesImage2 from '@/assets/Deglet-Nour -Dates-2.jpg';
import degletNourDatesImage3 from '@/assets/Deglet-Nour -Dates-3.jpg';
import gharsDatesImage1 from '@/assets/Ghars-Dates-1.jpg';
import gharsDatesImage2 from '@/assets/Ghars-Dates-2.jpg';
import dateSyrupImage1 from '@/assets/Date-Syrup-1.jpg';
import dateSyrupImage2 from '@/assets/Date-Syrup-2.jpg';
import datePasteImage1 from '@/assets/Date-Paste-1.jpg';
import dateSugarImage1 from '@/assets/Date-Sugar-1.jpg';
import dateSugarImage2 from '@/assets/Date-Sugar-2.jpg';
import dateVinegarImage1 from '@/assets/Date-Vinegar-1.jpg';
import dateVinegarImage2 from '@/assets/Date-Vinegar-2.jpg';
import dateCoffeeImage1 from '@/assets/Date-Coffee-1.jpg';
import stuffedDatesWithNutsImage1 from '@/assets/Stuffed-Dates-withNuts-1.jpg';
import stuffedDatesWithNutsImage2 from '@/assets/Stuffed-Dates-withNuts-2.jpg';
import stuffedDatesWithNutsImage3 from '@/assets/Stuffed-Dates-withNuts-3.jpg';
import juicesImage1 from '@/assets/Juices-1.jpeg';
import juicesImage2 from '@/assets/Juices-2.jpeg';
import juicesImage3 from '@/assets/Juices-3.jpeg';

import SodajuicesImage1 from '@/assets/soda-Juices-1.jpeg';
import SodajuicesImage2 from '@/assets/soda-Juices-2.jpeg';

import waterImage1 from '@/assets/water-1.jpg';



import sweetsAndPastriesImage1 from '@/assets/Sweets-and-pastries-1.jpeg';
import sweetsAndPastriesImage2 from '@/assets/Sweets-and-pastries-2.jpeg';
import chocolateImage1 from '@/assets/Chocolate-1.jpeg';
import chocolateImage2 from '@/assets/Chocolate-2.jpeg';
import chocolateImage3 from '@/assets/Chocolate-3.jpeg';
import bakingImage1 from '@/assets/Baking-1.jpeg';
import bakingImage2 from '@/assets/Baking-2.jpeg';
import bakingImage3 from '@/assets/Baking-3.jpeg';

import BiscuitsImage1 from '@/assets/Biscuits-1.jpeg';
import BiscuitsImage2 from '@/assets/Biscuits-2.jpeg';


import potatoImage1 from '@/assets/Potato-1.jpg';
import potatoImage2 from '@/assets/Potato-2.jpg';
import onionImage1 from '@/assets/Onion-1.jpg';
import onionImage2 from '@/assets/Onion-2.jpeg';
import onionImage3 from '@/assets/Onion-3.jpg';
import broccoliImage1 from '@/assets/Broccoli-1.jpg';
import broccoliImage2 from '@/assets/Broccoli-2.jpg';
import carrotImage1 from '@/assets/Carrot-1.jpg';
import carrotImage2 from '@/assets/Carrot-2.jpg';
import cauliflowerImage1 from '@/assets/Cauliflower-1.jpg';
import cauliflowerImage2 from '@/assets/Cauliflower-2.jpg';
import eggplantImage1 from '@/assets/Eggplant-1.jpeg';
import peasImage1 from '@/assets/Peas-1.jpg';
import greenBeansImage1 from '@/assets/Green-Beans-1.jpg';
import greenBeansImage2 from '@/assets/Green-Beans-2.jpg';
import favaBeansImage1 from '@/assets/Fava-Beans-1.jpg';
import favaBeansImage2 from '@/assets/Fava-Beans-2.jpg';
import cucumberImage1 from '@/assets/Cucumber-1.jpg';
import cucumberImage2 from '@/assets/Cucumber-2.jpg';
import zucchiniImage1 from '@/assets/Zucchini-1.jpg';
import zucchiniImage2 from '@/assets/Zucchini-2.jpeg';
import zucchiniImage3 from '@/assets/Zucchini-3.jpg';
import pumpkinImage1 from '@/assets/Pumpkin-1.jpg';
import pumpkinImage2 from '@/assets/Pumpkin-2.jpg';
import artichokeImage1 from '@/assets/Artichoke-1.jpg';
import artichokeImage2 from '@/assets/Artichoke-2.jpg';
import grapesImage1 from '@/assets/Grapes-1.jpeg';
import grapesImage2 from '@/assets/Grapes-2.jpeg';
import grapesImage3 from '@/assets/Grapes-3.jpeg';
import grapesImage4 from '@/assets/Grapes-4.jpg';
import watermelonImage1 from '@/assets/Watermelon-1.jpg';
import watermelonImage2 from '@/assets/Watermelon-2.jpg';
import peachImage1 from '@/assets/Peach-1.jpg';
import peachImage2 from '@/assets/Peach-2.jpg';
import peachImage3 from '@/assets/Peach-3.jpeg';
import peachImage4 from '@/assets/Peach-4.jpeg';
import strawberryImage1 from '@/assets/Strawberry-1.jpg';
import strawberryImage2 from '@/assets/Strawberry-2.jpg';
import strawberryImage3 from '@/assets/Strawberry-3.jpg';
import pomegranateImage1 from '@/assets/Pomegranate-1.jpeg';
import pomegranateImage2 from '@/assets/Pomegranate-2.jpeg';
import pomegranateImage3 from '@/assets/Pomegranate-3.jpg';
import premiumDatesCategoryImage from '@/assets/Premium-Dates.jpg';
import freshFruitsCategoryImage from '@/assets/Fresh-Fruits.jpg';
import foodProductsCategoryImage from '@/assets/Food-Products.jpg';
import freshVegetablesCategoryImage from '@/assets/Fresh-Vegetables.jpg';
import datesImage4 from '@/assets/product-dates-4.jpeg';
import datesImage5 from '@/assets/product-dates-5.jpeg';
import datesImage6 from '@/assets/product-dates-6.jpeg';
import citrusImage from '@/assets/product-citrus.jpg';
import citrusImage1 from '@/assets/product-citrus-1.jpeg';
import citrusImage2 from '@/assets/product-citrus-2.jpeg';
import citrusImage3 from '@/assets/product-citrus-3.jpeg';
import citrusImage4 from '@/assets/product-citrus-4.jpeg';
import citrusImage5 from '@/assets/product-citrus-5.jpeg';
import citrusImage6 from '@/assets/product-citrus-6.jpeg';
import citrusImage7 from '@/assets/product-citrus-7.jpeg';
import grainsImage from '@/assets/product-grains.jpg';
import oliveOilImage from '@/assets/product-olive-oil.jpg';
import oliveOilImage3 from '@/assets/Oil-1.jpg';
import oliveOilImage4 from '@/assets/Oil-3.jpg';
import greenOlivesImage1 from '@/assets/greenOlivesImage1.jpg';
import greenOlivesImage2 from '@/assets/greenOlivesImage2.jpg';
import blackOlivesImage1 from '@/assets/blackOlivesImage1.jpg';
import tomatoesImage from '@/assets/product-tomatoes.jpg';
import tomatoesImage1 from '@/assets/product-tomatoes-1.jpg';
import tomatoesImage2 from '@/assets/product-tomatoes-2.jpg';
import tomatoesImage3 from '@/assets/product-tomatoes-3.jpeg';
import tomatoesImage4 from '@/assets/product-tomatoes-4.jpeg';
import tomatoesImage5 from '@/assets/product-tomatoes-5.jpeg';
import figsImage from '@/assets/product-figs.jpeg';
import figsImage1 from '@/assets/product-figs-1.jpg';
import ProductModal from './ProductModal';

interface Product {
  image: string;
  images?: string[]; // Additional images for carousel
  title: string;
  description: string;
  fullDescription: string;
  origin: string;
  packaging: string;
  availability: string;
  category: string;
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image?: string; // Optional: specific image for category
  products: Product[];
}

const ProductsSection = () => {
  const { t, isRTL } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const productsList: Product[] = [
    {
      image: olivesImage,
      images: [olivesImage], //ziton 1 prudect image
      title: t('products.olives.title'),
      description: t('products.olives.desc'),
      fullDescription: t('products.olives.fullDesc'),
      origin: t('products.olives.origin'),
      packaging: t('products.olives.packaging'),
      availability: t('products.olives.availability'),
      category: 'olives',
    },
    {
      image: degletNourDatesImage1,
      images: [degletNourDatesImage1, degletNourDatesImage2, degletNourDatesImage3],// daglat nor dates 3 images
      title: t('products.dates.title'),
      description: t('products.dates.desc'),
      fullDescription: t('products.dates.fullDesc'),
      origin: t('products.dates.origin'),
      packaging: t('products.dates.packaging'),
      availability: t('products.dates.availability'),
      category: 'dates',
    },
    {
      image: gharsDatesImage1,
      images: [gharsDatesImage1], // ghars dates 2 images
      title: t('products.gharsDates.title'),
      description: t('products.gharsDates.desc'),
      fullDescription: t('products.gharsDates.fullDesc'),
      origin: t('products.gharsDates.origin'),
      packaging: t('products.gharsDates.packaging'),
      availability: t('products.gharsDates.availability'),
      category: 'dates',
    },
    {
      image: dateSyrupImage1,
      images: [dateSyrupImage1],// dbs tamr 2 images
      title: t('products.dateSyrup.title'),
      description: t('products.dateSyrup.desc'),
      fullDescription: t('products.dateSyrup.fullDesc'),
      origin: t('products.dateSyrup.origin'),
      packaging: t('products.dateSyrup.packaging'),
      availability: t('products.dateSyrup.availability'),
      category: 'dates',
    },
    {
      image: datePasteImage1,
      images: [datePasteImage1], // 3ajinat tamr 
      title: t('products.datePaste.title'),
      description: t('products.datePaste.desc'),
      fullDescription: t('products.datePaste.fullDesc'),
      origin: t('products.datePaste.origin'),
      packaging: t('products.datePaste.packaging'),
      availability: t('products.datePaste.availability'),
      category: 'dates',
    },
    {
      image: dateSugarImage1,
      images: [dateSugarImage1, dateSugarImage2], // souker tamr 2 images
      title: t('products.dateSugar.title'),
      description: t('products.dateSugar.desc'),
      fullDescription: t('products.dateSugar.fullDesc'),
      origin: t('products.dateSugar.origin'),
      packaging: t('products.dateSugar.packaging'),
      availability: t('products.dateSugar.availability'),
      category: 'dates',
    },
    {
      image: dateVinegarImage1,
      images: [dateVinegarImage1, dateVinegarImage2], // kal tamr 2 images
      title: t('products.dateVinegar.title'),
      description: t('products.dateVinegar.desc'),
      fullDescription: t('products.dateVinegar.fullDesc'),
      origin: t('products.dateVinegar.origin'),
      packaging: t('products.dateVinegar.packaging'),
      availability: t('products.dateVinegar.availability'),
      category: 'dates',
    },
    {
      image: dateCoffeeImage1,
      images: [dateCoffeeImage1], // qahwat tamr 1 image
      title: t('products.dateCoffee.title'),
      description: t('products.dateCoffee.desc'),
      fullDescription: t('products.dateCoffee.fullDesc'),
      origin: t('products.dateCoffee.origin'),
      packaging: t('products.dateCoffee.packaging'),
      availability: t('products.dateCoffee.availability'),
      category: 'dates',
    },
    {
      image: stuffedDatesWithNutsImage1,
      images: [stuffedDatesWithNutsImage1, stuffedDatesWithNutsImage2, stuffedDatesWithNutsImage3], // mokasart tamr  3 images
      title: t('products.stuffedDates.title'),
      description: t('products.stuffedDates.desc'),
      fullDescription: t('products.stuffedDates.fullDesc'),
      origin: t('products.stuffedDates.origin'),
      packaging: t('products.stuffedDates.packaging'),
      availability: t('products.stuffedDates.availability'),
      category: 'dates',
    },
    {
      image: citrusImage2,
      images: [ citrusImage1, citrusImage2, citrusImage3, citrusImage4, citrusImage5, citrusImage6, citrusImage7], // Add 8 images here
      title: t('products.citrus.title'),
      description: t('products.citrus.desc'),
      fullDescription: t('products.citrus.fullDesc'),
      origin: t('products.citrus.origin'),
      packaging: t('products.citrus.packaging'),
      availability: t('products.citrus.availability'),
      category: 'fruits',
    },
    {
      image: chocolateImage1,
      images: [chocolateImage1, chocolateImage2, chocolateImage3],
      title: t('products.foodChocolate.title'),
      description: t('products.foodChocolate.desc'),
      fullDescription: t('products.foodChocolate.fullDesc'),
      origin: t('products.foodChocolate.origin'),
      packaging: t('products.foodChocolate.packaging'),
      availability: t('products.foodChocolate.availability'),
      category: 'food',
    },
    {
      image: sweetsAndPastriesImage1,
      images: [sweetsAndPastriesImage1, sweetsAndPastriesImage2],
      title: t('products.foodSweets.title'),
      description: t('products.foodSweets.desc'),
      fullDescription: t('products.foodSweets.fullDesc'),
      origin: t('products.foodSweets.origin'),
      packaging: t('products.foodSweets.packaging'),
      availability: t('products.foodSweets.availability'),
      category: 'food',
    },
    {
      image: BiscuitsImage1,
      images: [BiscuitsImage1, BiscuitsImage2],
      title: t('products.foodBiscuits.title'),
      description: t('products.foodBiscuits.desc'),
      fullDescription: t('products.foodBiscuits.fullDesc'),
      origin: t('products.foodBiscuits.origin'),
      packaging: t('products.foodBiscuits.packaging'),
      availability: t('products.foodBiscuits.availability'),
      category: 'food',
    },
    {
      image: bakingImage1,
      images: [bakingImage1, bakingImage2 ,bakingImage3],
      title: t('products.foodBaking.title'),
      description: t('products.foodBaking.desc'),
      fullDescription: t('products.foodBaking.fullDesc'),
      origin: t('products.foodBaking.origin'),
      packaging: t('products.foodBaking.packaging'),
      availability: t('products.foodBaking.availability'),
      category: 'food',
    },
    {
      image: SodajuicesImage1,
      images: [  SodajuicesImage1, SodajuicesImage2  ],
      title: t('products.foodSoftDrinks.title'),
      description: t('products.foodSoftDrinks.desc'),
      fullDescription: t('products.foodSoftDrinks.fullDesc'),
      origin: t('products.foodSoftDrinks.origin'),
      packaging: t('products.foodSoftDrinks.packaging'),
      availability: t('products.foodSoftDrinks.availability'),
      category: 'food',
    },
    {
      image: juicesImage1,
      images: [juicesImage1, juicesImage2, juicesImage3],
      title: t('products.foodJuices.title'),
      description: t('products.foodJuices.desc'),
      fullDescription: t('products.foodJuices.fullDesc'),
      origin: t('products.foodJuices.origin'),
      packaging: t('products.foodJuices.packaging'),
      availability: t('products.foodJuices.availability'),
      category: 'food',
    },
    {
      image: waterImage1,
      images: [waterImage1],
      title: t('products.foodWater.title'),
      description: t('products.foodWater.desc'),
      fullDescription: t('products.foodWater.fullDesc'),
      origin: t('products.foodWater.origin'),
      packaging: t('products.foodWater.packaging'),
      availability: t('products.foodWater.availability'),
      category: 'food',
    },
    {
      image: oliveOilImage,
      images: [ oliveOilImage, oliveOilImage3],
      title: t('products.oliveOil.title'),
      description: t('products.oliveOil.desc'),
      fullDescription: t('products.oliveOil.fullDesc'),
      origin: t('products.oliveOil.origin'),
      packaging: t('products.oliveOil.packaging'),
      availability: t('products.oliveOil.availability'),
      category: 'olives',
    },
    {
      image: greenOlivesImage1,
      images: [greenOlivesImage1,greenOlivesImage2],//ziton akdar 
      title: t('products.greenOlivesPitted.title'),
      description: t('products.greenOlivesPitted.desc'),
      fullDescription: t('products.greenOlivesPitted.fullDesc'),
      origin: t('products.greenOlivesPitted.origin'),
      packaging: t('products.greenOlivesPitted.packaging'),
      availability: t('products.greenOlivesPitted.availability'),
      category: 'olives',
    },
    {
      image: blackOlivesImage1,
      images: [blackOlivesImage1], //ziton ak7al
      title: t('products.blackOlivesWithPit.title'),
      description: t('products.blackOlivesWithPit.desc'),
      fullDescription: t('products.blackOlivesWithPit.fullDesc'),
      origin: t('products.blackOlivesWithPit.origin'),
      packaging: t('products.blackOlivesWithPit.packaging'),
      availability: t('products.blackOlivesWithPit.availability'),
      category: 'olives',
    },
    {
      image: tomatoesImage2,
      images: [tomatoesImage, tomatoesImage1, tomatoesImage2 ,tomatoesImage3 ,tomatoesImage4, tomatoesImage5], // Add 3 images here
      title: t('products.tomatoes.title'),
      description: t('products.tomatoes.desc'),
      fullDescription: t('products.tomatoes.fullDesc'),
      origin: t('products.tomatoes.origin'),
      packaging: t('products.tomatoes.packaging'),
      availability: t('products.tomatoes.availability'),
      category: 'vegetables',
    },
    {
      image: potatoImage1,
      images: [potatoImage1, potatoImage2], //batata 2 images
      title: t('products.potato.title'),
      description: t('products.potato.desc'),
      fullDescription: t('products.potato.fullDesc'),
      origin: t('products.potato.origin'),
      packaging: t('products.potato.packaging'),
      availability: t('products.potato.availability'),
      category: 'vegetables',
    },
    {
      image: onionImage2,
      images: [onionImage1, onionImage2, onionImage3], // basal 2 images
      title: t('products.onion.title'),
      description: t('products.onion.desc'),
      fullDescription: t('products.onion.fullDesc'),
      origin: t('products.onion.origin'),
      packaging: t('products.onion.packaging'),
      availability: t('products.onion.availability'),
      category: 'vegetables',
    },
    {
      image: broccoliImage1,
      images: [broccoliImage1, broccoliImage2], // brokoli 2 images
      title: t('products.broccoli.title'),
      description: t('products.broccoli.desc'),
      fullDescription: t('products.broccoli.fullDesc'),
      origin: t('products.broccoli.origin'),
      packaging: t('products.broccoli.packaging'),
      availability: t('products.broccoli.availability'),
      category: 'vegetables',
    },
    {
      image: carrotImage1,
      images: [carrotImage1, carrotImage2], // jazar 2 images
      title: t('products.carrot.title'),
      description: t('products.carrot.desc'),
      fullDescription: t('products.carrot.fullDesc'),
      origin: t('products.carrot.origin'),
      packaging: t('products.carrot.packaging'),
      availability: t('products.carrot.availability'),
      category: 'vegetables',
    },
    {
      image: cauliflowerImage1,
      images: [cauliflowerImage1, cauliflowerImage2], //chouflor 2 images
      title: t('products.cauliflower.title'),
      description: t('products.cauliflower.desc'),
      fullDescription: t('products.cauliflower.fullDesc'),
      origin: t('products.cauliflower.origin'),
      packaging: t('products.cauliflower.packaging'),
      availability: t('products.cauliflower.availability'),
      category: 'vegetables',
    },
    {
      image: eggplantImage1,
      images: [eggplantImage1], // badinjan 2 images
      title: t('products.eggplant.title'),
      description: t('products.eggplant.desc'),
      fullDescription: t('products.eggplant.fullDesc'),
      origin: t('products.eggplant.origin'),
      packaging: t('products.eggplant.packaging'),
      availability: t('products.eggplant.availability'),
      category: 'vegetables',
    },
    {
      image: peasImage1,
      images: [peasImage1, peasImage1],//jalbana 2 images
      title: t('products.peas.title'),
      description: t('products.peas.desc'),
      fullDescription: t('products.peas.fullDesc'),
      origin: t('products.peas.origin'),
      packaging: t('products.peas.packaging'),
      availability: t('products.peas.availability'),
      category: 'vegetables',
    },
    {
      image: greenBeansImage1,
      images: [greenBeansImage1, greenBeansImage2],
      title: t('products.greenBeans.title'),
      description: t('products.greenBeans.desc'),
      fullDescription: t('products.greenBeans.fullDesc'),
      origin: t('products.greenBeans.origin'),
      packaging: t('products.greenBeans.packaging'),
      availability: t('products.greenBeans.availability'),
      category: 'vegetables',
    },
    {
      image: favaBeansImage2,
      images: [favaBeansImage1, favaBeansImage2], /// foul 2 images
      title: t('products.favaBeans.title'),
      description: t('products.favaBeans.desc'),
      fullDescription: t('products.favaBeans.fullDesc'),
      origin: t('products.favaBeans.origin'),
      packaging: t('products.favaBeans.packaging'),
      availability: t('products.favaBeans.availability'),
      category: 'vegetables',
    },
    {
      image: cucumberImage1,
      images: [cucumberImage1, cucumberImage2], // khiyar 2 images
      title: t('products.cucumber.title'),
      description: t('products.cucumber.desc'),
      fullDescription: t('products.cucumber.fullDesc'),
      origin: t('products.cucumber.origin'),
      packaging: t('products.cucumber.packaging'),
      availability: t('products.cucumber.availability'),
      category: 'vegetables',
    },
    {
      image: zucchiniImage1,
      images: [zucchiniImage1, zucchiniImage2, zucchiniImage3], // kousa 3 images
      title: t('products.zucchini.title'),
      description: t('products.zucchini.desc'),
      fullDescription: t('products.zucchini.fullDesc'),
      origin: t('products.zucchini.origin'),
      packaging: t('products.zucchini.packaging'),
      availability: t('products.zucchini.availability'),
      category: 'vegetables',
    },
    {
      image: pumpkinImage2,
      images: [pumpkinImage1, pumpkinImage2], // yareet 2 images
      title: t('products.pumpkin.title'),
      description: t('products.pumpkin.desc'),
      fullDescription: t('products.pumpkin.fullDesc'),
      origin: t('products.pumpkin.origin'),
      packaging: t('products.pumpkin.packaging'),
      availability: t('products.pumpkin.availability'),
      category: 'vegetables',
    },
    {
      image: artichokeImage1,
      images: [artichokeImage1, artichokeImage2], // artichoke 2 images
      title: t('products.artichoke.title'),
      description: t('products.artichoke.desc'),
      fullDescription: t('products.artichoke.fullDesc'),
      origin: t('products.artichoke.origin'),
      packaging: t('products.artichoke.packaging'),
      availability: t('products.artichoke.availability'),
      category: 'vegetables',
    },
    {
      image: figsImage,
      images: [figsImage, figsImage1],
      title: t('products.figs.title'),
      description: t('products.figs.desc'),
      fullDescription: t('products.figs.fullDesc'),
      origin: t('products.figs.origin'),
      packaging: t('products.figs.packaging'),
      availability: t('products.figs.availability'),
      category: 'fruits',
    },
    {
      image: grapesImage1,
      images: [grapesImage1, grapesImage2, grapesImage3, grapesImage4],//3nab 4 images
      title: t('products.grapes.title'),
      description: t('products.grapes.desc'),
      fullDescription: t('products.grapes.fullDesc'),
      origin: t('products.grapes.origin'),
      packaging: t('products.grapes.packaging'),
      availability: t('products.grapes.availability'),
      category: 'fruits',
    },
    {
      image: watermelonImage1,
      images: [watermelonImage1, watermelonImage2], //dala3 2 images
      title: t('products.watermelon.title'),
      description: t('products.watermelon.desc'),
      fullDescription: t('products.watermelon.fullDesc'),
      origin: t('products.watermelon.origin'),
      packaging: t('products.watermelon.packaging'),
      availability: t('products.watermelon.availability'),
      category: 'fruits',
    },
    {
      image: peachImage3,
      images: [peachImage1, peachImage2, peachImage3, peachImage4], //khokh 4 images
      title: t('products.peach.title'),
      description: t('products.peach.desc'),
      fullDescription: t('products.peach.fullDesc'),
      origin: t('products.peach.origin'),
      packaging: t('products.peach.packaging'),
      availability: t('products.peach.availability'),
      category: 'fruits',
    },
    {
      image: strawberryImage1,
      images: [strawberryImage1, strawberryImage2, strawberryImage3],//fraise 3 images
      title: t('products.strawberry.title'),
      description: t('products.strawberry.desc'),
      fullDescription: t('products.strawberry.fullDesc'),
      origin: t('products.strawberry.origin'),
      packaging: t('products.strawberry.packaging'),
      availability: t('products.strawberry.availability'),
      category: 'fruits',
    },
    {
      image: pomegranateImage1,
      images: [pomegranateImage1, pomegranateImage2, pomegranateImage3],//rumman 3 images
      title: t('products.pomegranate.title'),
      description: t('products.pomegranate.desc'),
      fullDescription: t('products.pomegranate.fullDesc'),
      origin: t('products.pomegranate.origin'),
      packaging: t('products.pomegranate.packaging'),
      availability: t('products.pomegranate.availability'),
      category: 'fruits',
    },
  ];

  // Group products by category
  const categories: ProductCategory[] = [
    {
      id: 'olives',
      name: t('category.olives'),
      description: t('category.olives.desc'),
      products: productsList.filter(p => p.category === 'olives'),
    },
    {
      id: 'dates',
      name: t('category.dates'),
      description: t('category.dates.desc'),
      image: premiumDatesCategoryImage,
      products: productsList.filter(p => p.category === 'dates'),
    },
    {
      id: 'food',
      name: t('category.food'),
      description: t('category.food.desc'),
      image: foodProductsCategoryImage,
      products: productsList.filter(p => p.category === 'food'),
    },
    {
      id: 'vegetables',
      name: t('category.vegetables'),
      description: t('category.vegetables.desc'),
      image: freshVegetablesCategoryImage,
      products: productsList.filter(p => p.category === 'vegetables'),
    },
    {
      id: 'fruits',
      name: t('category.fruits'),
      description: t('category.fruits.desc'),
      image: freshFruitsCategoryImage,
      products: productsList.filter(p => p.category === 'fruits'),
    }
  ];

  const selectedCategory = selectedCategoryId
    ? categories.find(category => category.id === selectedCategoryId) || null
    : null;

  return (
    <>
      <section id="products" className="py-12 md:py-24 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          {/* Header */}
          <FadeIn className="text-center max-w-2xl mx-auto mb-8 md:mb-16 px-2">
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              {t('products.subtitle')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
              {selectedCategory ? selectedCategory.name : t('products.title')}
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              {selectedCategory ? selectedCategory.description : t('products.viewDetails')}
            </p>
          </FadeIn>

          {/* Back Button - Show when category is selected */}
          {selectedCategory && (
            <FadeIn className="mb-8">
              <button
                onClick={() => setSelectedCategoryId(null)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {isRTL ? '→' : '←'} {t('products.backToCategories')}
              </button>
            </FadeIn>
          )}

          {/* View 1: Categories Grid (Show when no category is selected) */}
          {!selectedCategory ? (
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6" staggerDelay={0.08}>
              {categories.filter(c => c.products.length > 0).map((category) => (
                <StaggerItem key={category.id}>
                  <div
                    onClick={() => setSelectedCategoryId(category.id)}
                    className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer h-full"
                  >
                    {/* Category Image (use first product image) */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={category.image || category.products[0]?.image || ''}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className={cn(
                      'absolute bottom-0 left-0 right-0 p-3 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500',
                      isRTL && 'text-right'
                    )}>
                      <h3 className="font-display text-sm md:text-lg font-bold text-secondary-foreground mb-1 md:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {category.name}
                      </h3>
                      <p className="text-secondary-foreground/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2 mb-3">
                        {category.description}
                      </p>
                      <span className="hidden md:inline-block text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                        {category.products.length} {t('products.itemsLabel')} →
                      </span>
                    </div>

                    {/* Default Badge */}
                    <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-card/90 backdrop-blur-sm rounded-md md:rounded-lg text-foreground font-medium text-xs md:text-sm shadow-elegant line-clamp-1">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            /* View 2: Products in Selected Category */
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6" staggerDelay={0.08}>
              {selectedCategory.products.map((product, index) => (
                <StaggerItem key={index}>
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-card shadow-card hover:shadow-elegant transition-all duration-500 cursor-pointer h-full"
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className={cn(
                      'absolute bottom-0 left-0 right-0 p-3 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500',
                      isRTL && 'text-right'
                    )}>
                      <h4 className="font-display text-sm md:text-lg font-bold text-secondary-foreground mb-1 md:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {product.title}
                      </h4>
                      <p className="text-secondary-foreground/80 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2 mb-2">
                        {product.description}
                      </p>
                      <div className="text-secondary-foreground/70 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300 space-y-1 mb-3">
                        <div><span className="font-semibold">{t('products.modal.origin')}:</span> {product.origin}</div>
                        <div><span className="font-semibold">{t('products.modal.packaging')}:</span> {product.packaging}</div>
                      </div>
                      <span className="hidden md:inline-block text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                        {t('products.clickDetails')} →
                      </span>
                    </div>

                    {/* Default Title Badge */}
                    <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 group-hover:opacity-0 transition-opacity duration-300">
                      <span className="inline-block px-2 py-1 md:px-4 md:py-2 bg-card/90 backdrop-blur-sm rounded-md md:rounded-lg text-foreground font-medium text-xs md:text-sm shadow-elegant line-clamp-1">
                        {product.title}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Product Modal - Shows product details */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

export default ProductsSection;