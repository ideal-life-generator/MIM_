import { get, number } from '../utils/type';

export default class Transform {
  stage = 1;

  constructor(settings) {
    Object.assign(this, settings);
  }

  start(onTick) {
    let { stage, animationIntervalId } = this;
    const { duration } = this;

    const startedAt = Date.now();
    const endAt = startedAt + ((stage < 1 ? stage : 1) * duration);

    if (get(animationIntervalId) === number) {
      clearInterval(animationIntervalId);
    }

    const handler = () => {
      stage = 1 - ((endAt - Date.now()) / duration);

      if (stage >= 1) {
        stage = 1;

        clearInterval(animationIntervalId);
      }

      onTick(stage);

      Object.assign(this, { stage });
    };

    handler();

    animationIntervalId = setInterval(handler);

    Object.assign(this, { animationIntervalId });
  }
}
