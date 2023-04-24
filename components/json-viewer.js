import dynamic from 'next/dynamic';

const DynamicJSONViewer = dynamic(() => import('react-json-view'), {
  ssr: false,
})

export const JSONViewer = (data) => (
  <DynamicJSONViewer
    src={data}
    name='response'
    style={{
      padding: '1rem',
    }}
    theme='summerfruit:inverted'
    collapseStringsAfterLength={15}
    iconStyle='square'
    collapsed={false}
    displayObjectSize={false}
    displayDataTypes={false}
  />
);
