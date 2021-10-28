export interface CallsData {
  nodes: Node[];
  totalCount: number;
  hasNextPage: boolean;
}

export interface Node {
  id: string;
  duration: number;
  is_archived: boolean;
  from: string;
  to: string;
  direction: string;
  call_type: string;
  via: string;
  created_at: string;
  notes: Note[];
}

export interface Note {
  id: string;
  content: string;
}

export const callTypes = {
  ALL_CALLS: 'ALL_CALLS',
  ARCHIVED_CALLS: 'ARCHIVED_CALLS',
  UNARCHIVED_CALLS: 'UNARCHIVED_CALLS',
};

export interface CallInfo {
  id?: string;
  duration?: number;
  is_archived?: boolean;
  from?: string;
  to?: string;
  direction?: string;
  call_type?: string;
  via?: string;
  created_at?: string;
  notes?: Note[];
}
