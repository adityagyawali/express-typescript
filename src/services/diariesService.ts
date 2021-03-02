import diaryData from '../../data/diaries'
import { NewEntry, NonSensitiveDiaryEntry, DiaryEntry } from '../types'

const getEntries = (): DiaryEntry[] => {
  return diaryData
}

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryData.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility,
    }
  })
}

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaryData.find((data) => data.id === id)
  return entry
}

const addEntry = (entry: NewEntry): DiaryEntry => {
  const newEntry = {
    id: Math.max(...diaryData.map((d) => d.id)) + 1,
    ...entry,
  }
  diaryData.push(newEntry)
  return newEntry
}

export default {
  getEntries,
  addEntry,
  getNonSensitiveEntries,
  findById,
}
