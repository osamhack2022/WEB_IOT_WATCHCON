import React from 'react';
import NodeListTable from '../../components/manage-node/home/NodeListTable';

const ListView = ({ setting, nodeList }) => {
    return <NodeListTable setting={setting} nodeList={nodeList} />;
};

export default ListView;