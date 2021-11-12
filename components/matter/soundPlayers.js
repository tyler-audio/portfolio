import { Howl } from 'howler';

export const pluckSample = (file) => {
  const sound = new Howl({
    src: [`/${file}`],
    volume: 0.5,
  });
  sound.play();
  // return sound;
};