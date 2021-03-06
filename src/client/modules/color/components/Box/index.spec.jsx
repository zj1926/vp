import { render, fireEvent } from 'test-utils';
import Box from '.';
import { boxInfo } from '../../../../../testing/dataMock';

describe('render properly', () => {
  const clickCb = jest.fn();

  test('render properly with click', () => {
    const { container, getByText, rerender } = render(
      <Box
        id={boxInfo.id}
        username={boxInfo.username}
        value={boxInfo.color}
        starNum={boxInfo.star}
        onClickHeart={clickCb}
        starred
        vertical
        showUsername
      />
    );
    rerender(
      <Box
        id={boxInfo.id}
        username={boxInfo.username}
        value={boxInfo.color}
        starNum={boxInfo.star}
        onClickHeart={clickCb}
        starred
        vertical={false}
        showUsername
      />
    );

    rerender(
      <Box
        id={boxInfo.id}
        username={boxInfo.username}
        value={boxInfo.color}
        starNum={boxInfo.star}
        onClickHeart={clickCb}
        starred
        vertical={false}
        showUsername
      />
    );

    fireEvent.click(getByText('Red Heart'));
    fireEvent.click(container.querySelector('ul'));
    fireEvent.click(getByText(`#${boxInfo.color.split('#')[0]}`));

    expect(clickCb).toBeCalled();
    expect(container.querySelectorAll('li')).toHaveLength(4);
  });
});
