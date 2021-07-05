import directordeskImage from "../images/directorsdesk.jpg";
import tpoImage from "../images/tpoImage.webp";

const AboutIIITR = `The Indian Institute of Information Technology, Raichur(IIITR) was established in 2019, as a centre of academic excellence in the field of Computer Science and Information Technology. Currently being mentored by the Indian Institute of Technology, Hyderabad(IITH), IIITR is an institute of national importance, formed under the Public Private Partnership model, with contributions from MHRD, Government of India and the Government of Karnataka.
With its highly esteemed & able faculty, modern curriculum and a pioneering batch of bright minded individuals, IIITR is an abode of creativity and innovation, ready to show the world what it is capable of.`;

const Mission = `Budding under one of the most sought after institutes in the country, IIITR has had the philosophy of bringing positive changes in the lives of its students, and thereby, the society at large, from its very inception. The mission has always been to cultivate ingenuity, originality and innovation in the students, who are the future of this country.`;

const Thoughts = [
  {
    id: 1,
    isLeftAlign: true,
    haveLogo: true,
    writer: "Dr. BS Murty",
    heading: "From Director's Desk",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    imgSrc: directordeskImage,
    altText: "Director",
  },
  {
    id: 2,
    isLeftAlign: false,
    haveLogo: true,
    writer: "Dr. Sadhna Jha",
    heading: "Message From TPO",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

`,
    imgSrc: tpoImage,
    altText: "TPO",
  },
];

const WhyUs = [
  {
    id: 1,
    heading: "Lorem Ipsum",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est libero, molestie id vestibulum eu, laoreet a sapien. Vestibulum cursus, tellus et consequat consequat, urna risus facilisis ligula, ac dignissim risus velit non nulla. Ut sodales tristique nulla sagittis imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc bibendum dictum arcu ullamcorper ultrices. Cras pellentesque varius mattis. Vestibulum dolor eros, ullamcorper ut leo ac, porttitor pharetra tortor. Suspendisse ac tincidunt leo, suscipit rhoncus libero.`,
  },
  {
    id: 2,
    heading: "Continued lorem ipsum",
    content: `Vestibulum porttitor nec purus quis egestas. Nulla vel arcu velit. Maecenas vel pellentesque ex, sed sollicitudin massa. Donec vehicula ornare nibh nec sagittis. Donec volutpat bibendum justo eu bibendum. Suspendisse vitae massa sollicitudin, efficitur lectus ac, malesuada dolor. Suspendisse sollicitudin commodo sapien, ac eleifend lacus lacinia id. Vivamus leo mi, volutpat ut ante eu, bibendum posuere mauris. Fusce eu scelerisque velit. Fusce accumsan consequat nibh sed facilisis. Aenean eget ornare leo, nec efficitur lacus. Maecenas nec vulputate risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eget est enim.`,
  },
];

export { AboutIIITR, Mission, Thoughts, WhyUs };
