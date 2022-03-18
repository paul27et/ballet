import { Component, createSignal, splitProps } from 'solid-js';

export const Image: Component = (props) => {
  const [local] = splitProps(props, ['imageClass', 'src'])
  const [getImage, setImage] = createSignal(null);

  // switch (local.src) {
  //   case 'assets/ballerina.png':
  //     import('assets/ballerina.png').then((img) => {
  //       console.log('LOG', img)
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/face.png':
  //     import('assets/ballerina.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/donKihot.png':
  //     import('assets/donKihot.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/bocharova.png':
  //     import('assets/bocharova.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/piterDonKihot.png':
  //     import('assets/piterDonKihot.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/jackobson.png':
  //     import('assets/jackobson.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/mariinka.png':
  //     import('assets/mariinka.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/karelia.png':
  //     import('assets/karelia.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   case 'assets/jisel.png':
  //     import('assets/jisel.png').then((img) => {
  //       setImage(img)
  //     })
  //     break;
  //   default:
  //     break;
  // }

  return (
    <img class={local.imageClass} src={local.src} alt="" />
  );
};