import { get, number } from '../utils/type';

export default class Transform {
  stage = 1;

  constructor(settings) {
    Object.assign(this, settings);
  }

  fromTo(previousState, nextState, onTick) {
    let { stage, animationIntervalId } = this;
    const { duration } = this;

    const startedAt = Date.now();
    const endAt = startedAt + ((stage < 1 ? stage : 1) * duration);

    if (get(animationIntervalId) === number) {
      clearInterval(animationIntervalId);
    }

    animationIntervalId = setInterval(() => {
      const params = {};

      stage = 1 - ((endAt - Date.now()) / duration);

      if (stage >= 1) {
        stage = 1;

        clearInterval(animationIntervalId);
      }

      Object.keys(previousState).forEach((prop) => {
        const { [prop]: previousValue } = previousState;
        const { [prop]: nextValue } = nextState;

        params[prop] = previousValue + ((nextValue - previousValue) * stage);
      });

      onTick(params);

      Object.assign(this, { stage });
    });

    Object.assign(this, { animationIntervalId });
  }
}
