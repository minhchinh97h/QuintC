import {createTransform} from 'redux-persist';
import serialize from 'serialize-javascript';

const ImmerTransform = createTransform(
  (inboundState: any) => {
    return serialize(inboundState);
  },
  (outboundState: any) => {
    if (
      typeof outboundState === 'string' ||
      typeof outboundState === 'boolean' ||
      typeof outboundState === 'number'
    ) {
      return eval('(' + outboundState + ')');
    }
    return eval(outboundState);
  },
);

export default ImmerTransform;
