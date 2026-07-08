import { site } from '../data/site'

function monthsBetween(start, end) {
  let months = (end.getFullYear() - start.getFullYear()) * 12
  months += end.getMonth() - start.getMonth()
  if (end.getDate() < start.getDate()) months -= 1
  return Math.max(0, months)
}

export function getExperienceMonths(now = new Date()) {
  const start = new Date(site.experienceStartDate)
  if (Number.isNaN(start.getTime())) return 0
  return monthsBetween(start, now)
}

export function getExperienceYears(now = new Date()) {
  return getExperienceMonths(now) / 12
}

export function getExperienceLabel(now = new Date()) {
  const months = getExperienceMonths(now)
  const years = Math.floor(months / 12)
  const remMonths = months % 12

  if (months < 1) return 'New'
  if (years === 0) return `${remMonths} mo${remMonths === 1 ? '' : 's'}`
  if (remMonths === 0) return `${years} yr${years === 1 ? '' : 's'}`
  return `${years} yr${years === 1 ? '' : 's'} ${remMonths} mo${remMonths === 1 ? '' : 's'}`
}
