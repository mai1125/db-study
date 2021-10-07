/** ユーザーモデル */
export interface User {
  /** id */
  id?: number;
  /** 名前 */
  name: string;
  /** 年齢 */
  age: number;
}

/**
 * Boardモデル
 */
export interface Board {
  /** id */
  id?: number;
  /** タイトル */
  title: string;
  /** 本文 */
  text: string;
}
