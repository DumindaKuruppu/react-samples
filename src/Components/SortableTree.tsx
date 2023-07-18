import React, {useState} from 'react';
import SortableTree, {
  addNodeUnderParent,
  changeNodeAtPath,
  getFlatDataFromTree,
  getNodeAtPath,
  getTreeFromFlatData,
  insertNode,
  removeNodeAtPath,
  toggleExpandedForAll,
  walk
} from 'react-sortable-tree';

export type TaskType = 'task' | 'milestone' | 'project' | 'parentProduct';
export interface Task {
  id: string;
  type: TaskType;
  name: string;
  start: Date;
  end: Date;

  /**
   * From 0 to 100
   */
  progress: number;
  styles?: {
    backgroundColor?: string;
    backgroundSelectedColor?: string;
    progressColor?: string;
    progressSelectedColor?: string;
  };
  isDisabled?: boolean;
  project?: string;
  dependencies?: string[];
  hideChildren?: boolean;
  parentId?: any;
  title?: string;
  poId?: string;
  teams?: any;
  toolsPool?: any;
  isHidden?: boolean;
  requiredQuantity?: any;
  filedQuantity?: any;
  resourceType?: any;
  borSequenceId?: any;
  pbsSequenceId?: any;
  pmolSequenceId?: any;
  milestoneSequanceId?: any;
  isSelected?:boolean
  deliveryDate?: any;
}

export function initListTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: 'P0040',
      title: 'Loading',
      id: '0000',
      progress: 25,
      type: 'project',
      hideChildren: false,
      parentId: null,
    },
  ];
  return tasks;
}

const Tree = () => {

  const [ treeListData, setTreeData ]: any = useState(initListTasks());


  return (
    <div style={{ height: 400 }}>
      <SortableTree
        treeData={treeListData}
        onChange={()=>{}}
      />
    </div>
  );
};

export default Tree;
