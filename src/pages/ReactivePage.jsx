import { observable, observer } from '@/which';

const obj = observable({
  count: 1,
});

const ReactivePage = observer((props) => {
  return (
    <div>
      <h3>ReactivePage</h3>
      <button
        onClick={() => {
          obj.count++;
        }}
      >
        {obj.count}
      </button>
    </div>
  );
});

export default ReactivePage;
