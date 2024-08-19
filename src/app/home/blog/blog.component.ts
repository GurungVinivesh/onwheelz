import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      id: 1,
      title: 'Motorbike Tour To Leh Ladakh',
      description: 'Adventurous travelers looking for a memorable tour will enjoy this private 9-day motorcycle journey from Manali to Ladakh. Cross high passes and desert roads without the risk of getting lost or stuck if you break down. Starting in Manali, you’ll ride to Ladakh over three days, to help with acclimatization. Ride to many natural and cultural highlights in Ladakh, including Leh, Pangong Tso, and the Nubra Valley.',
      image: 'assets/leh.jpg'
    },
    {
      id: 2,
      title: 'hilloferry - a guided cycling tour',
      description: 'Head up into the hills around Dharmsala with a professional guide to lead the way on this small-group mountain-biking tour for up to four people. You will be equipped with a high-quality mountain bike with hydraulic disc brakes plus helmets and gloves to keep your trip safe and enjoyable. Over the course of your 3-hour ride, your guide will lead you through the hills, showing you beautiful scenery along the way.',
      image: 'assets/hillo.jpg'
    },
    {
      id: 3,
      title: 'Manali Ladakh Tour Package',
      description: 'Simplify your trip to Ladakh with a private eight-day tour. Starting and ending in Manali, you’ll travel over the mountains to Ladakh, taking your time to better adjust to the altitude and enjoy the journey. In Ladakh, visit a range of natural and cultural highlights, including the Nubra Valley, Khardung La, Pangong Tso, and more. Be amazed by the high-altitude desert landscape and Tibetan-derived culture. ',
      image: 'assets/manali.jpg'
    },
    {
      id: 4,
      title: '9-Day Himalaya Mountain Bike Tour from Shimla to Daramshala',
      description: 'How about a Transalp experience in the Indian Himalayas? Everything on this mountain bike trip is just a little more exotic than the Alpine experience. The trails usually lead to small Indian mountain villages with laughing children, everything is a bit higher (between 1000 and 3000 m altitude) and also wilder. We certainly have the trails for ourselves and a delicious chai always awaits us. Our mtb tour in the Indian Himalayas is a combination of riding, fun, adventure and Indian culture. With stage lengths between 40 and 90 km, the stages are sporty, but also invite for nice breaks. We are practically on the trail of the legendary MTB Himalaya race – only without racing stress. The tour starts in the British-influenced Hillstation Shimla and ends in Mcleod Ganj with the Dalai Lama on the doorstep. We designed the tour in such a way that we are on the road with two bike guides and there are always two different partial routes to choose from . Best time April-June, September-November.',
      image: 'assets/9day.jpg'
    }

  ];
}
