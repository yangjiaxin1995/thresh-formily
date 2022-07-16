import { useContext } from 'react';
import { observer } from '@/which';
import { FormContext } from './context';

const FormConsumer = observer((props) => {
  const form = useContext(FormContext);
  return props.children(form);
});

export default FormConsumer;
