import { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './style.sass';
import Box from '../../color/components/Box';
import useLayoutContext from '../../../../hooks/useLayoutContext';

const AdminPanel = ({ loading, list, onAdjudicate, onInitList }) => {
  const [isVertical] = useLayoutContext();
  const colors = list.toJS();

  useEffect(() => {
    if (colors.length === 0) onInitList();
  }, []);

  const onAdjudicateLocal = (id, willLike) => () => onAdjudicate(id, willLike);

  return (
    <div className={style.container}>
      {!loading && colors.length === 0 && <h1>No colors to decide.</h1>}
      {colors.map((v) => (
        <div key={v.id}>
          <Box
            value={v.color}
            id={v.id}
            vertical={isVertical}
            likeNum={v.like}
            liked={false}
            onClickLike={onAdjudicateLocal(v.id, true)}
          />
          <br />
          &nbsp;&nbsp;
          <button
            className="button is-danger is-small"
            onClick={onAdjudicateLocal(v.id, false)}
          >
            Delete {v.id}
          </button>
        </div>
      ))}
    </div>
  );
};

AdminPanel.propTypes = {
  list: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  onInitList: PropTypes.func.isRequired,
  onAdjudicate: PropTypes.func.isRequired,
};

export default AdminPanel;
