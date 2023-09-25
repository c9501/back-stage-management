//tag标类型
export type TagsType = {
  name: string
  path: string
  icon: string
}

export type PayloadType = {
  index: number | string
  type: 'last' | 'notlast'
  path: string
}
