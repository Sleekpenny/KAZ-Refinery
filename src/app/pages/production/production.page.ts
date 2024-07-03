import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.page.html',
  styleUrls: ['./production.page.scss'],
})
export class ProductionPage implements OnInit {
  product: any = {
      image:
        'https://images.unsplash.com/photo-1546185058-592ead754d27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text1:
        ' The Company’s average daily crude production level rose by 1.4% compared with 2018. The Company had lot of work in 2016 to prepare and launch production at fields in Kazakhstan as part of its strategy of accelerated production growth. Special emphasis was placed on fields in Kashagan and Arystan oil field.',
      text2:
        'The Company had lot of work in 2016 to prepare and launch production at fields in Kazakhstan as part of its strategy of accelerated production growth. Special emphasis was placed on fields in Kashagan and Arystan oil field.',
      text3:
        'The Company had lot of work in 2016 to prepare and launch production at fields in Kazakhstan as part of its strategy of accelerated production growth. Special emphasis was placed on fields in Kashagan and Arystan oil field.',
      title: 'Crude production level'
    }
  products: any = {
      image:
        'https://images.unsplash.com/photo-1546185058-592ead754d27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text1:
        ' Work continued in 2014 to improve efficiency of field development and reduce operating expenses as part of Kaz Refinery Oil’s program for optimization of development and production of oil in the period of 2012–2017. Kaz Refinery Oil’s production companies took systematic measures in 2020 for increase of well productivity and oil recovery rates in order to achieve oil production targets. Development costs totalled $46,660 million.',
      text2:
        'Total production drilling in 2017 was 2.968 million meters, which is 27% more than in 2014. There was an increase in the share of international projects in total production drilling, which reflected intensive field development work as part of projects, in which Caspian Investments Resources Ltd. was a participant.',
        title: 'Efficiency'
    }

  constructor() {}

  ngOnInit() {}
}
