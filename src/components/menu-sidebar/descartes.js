// const getDisabledLabel = computed(() => {
//   return {
//     number: radioSelect.value === 'number' ? '' : 'form__disabled-label',
//     letter: radioSelect.value === 'letter' ? '' : 'form__disabled-label'
//   }
// })

// const setTypeGroup = () => {
//   if (selectTypeCalendar.value === 'Conductor' || selectTypeCalendar.value === 'Conductor-Buho') {
//     showRefuerzo.value = false
//     showSubgroup.value = true
//     group.value = constants.groupFive
//     sub.value = constants.subH

//   } else if (selectTypeCalendar.value === 'GruaDSM-Noche') {
//     group.value = constants.groupThree
//     showSubgroup.value = false
//     showRefuerzo.value = false

//   } else if (selectTypeCalendar.value === 'ParkingDSM-100') {
//     group.value = constants.groupTen
//     showSubgroup.value = false
//     showRefuerzo.value = false

//   } else if (selectTypeCalendar.value === 'ParkingDSM-50') {
//     group.value = constants.groupTwelve
//     showSubgroup.value = false
//     showRefuerzo.value = false

//   } else if (selectTypeCalendar.value === 'Refuerzo-Nocturno') {
//     group.value = constants.groupTwo
//     showSubgroup.value = false
//     showRefuerzo.value = true

//   } else if (selectTypeCalendar.value === 'GruaDSM') {
//     showRefuerzo.value = false
//     showSubgroup.value = true
//     group.value = constants.groupFive
//     sub.value = getArrayGruaDSM(selectGroup.value)

//   } else if (
//     selectTypeCalendar.value === 'Inspector' ||
//     selectTypeCalendar.value === 'Inspector-Noche'
//   ) {
//     showRefuerzo.value = false
//     showSubgroup.value = true
//     group.value = constants.groupFive
//     sub.value = constants.subJ

//   } else if (selectTypeCalendar.value === 'Grua') {
//     showRefuerzo.value = false
//     showSubgroup.value = true
//     group.value = constants.groupFive
//     sub.value = constants.subC
//   }
// }

// const setTypeSub = () => {
//   if (selectTypeCalendar.value === 'Conductor' || selectTypeCalendar.value === 'Buho') {
//     sub.value = constants.subH
//   } else if (
//     selectTypeCalendar.value === 'Inspector' ||
//     selectTypeCalendar.value === 'Inspector-Noche'
//   ) {
//     sub.value = constants.subJ
//   } else if (selectTypeCalendar.value === 'Grua') {
//     sub.value = constants.subC
//   } else if (selectTypeCalendar.value === 'GruaDSM') {
//     sub.value = getArrayGruaDSM(selectGroup.value)
//   } else if (
//     selectTypeCalendar.value === 'GruaDSM-Noche' ||
//     selectTypeCalendar.value === 'ParkingDSM-100' ||
//     selectTypeCalendar.value === 'ParkingDSM-50' ||
//     selectTypeCalendar.value === 'Refuerzo-Nocturno'
//   ) {
//     sub.value = ''
//   }
// }
