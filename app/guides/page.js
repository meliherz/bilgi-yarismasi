"use client"
import '../../styles/global.css'
import Button from '@mui/material/Button';
import ButtonBases from '@/components/guides/imageButton'
import IndeterminateCheckbox from '@/components/guides/multiplyCheckbox';
import SingleCheckBox from '@/components/guides/SingleCheckBox'
import Utilities from '@/components/guides/utilities';
import QuizRadio from '@/components/guides/quiz';
import SelectLabels from '@/components/guides/select';
import AccessibleTable from '@/components/guides/table'

export default function Guides() {
  return (
<div>
<h1>Guides</h1>
<Button variant="contained">Hello World</Button>
<br/>
<hr/>
<ButtonBases/>
<hr/>
<IndeterminateCheckbox/>
<br/>
<hr/>
<SingleCheckBox/>
<br/>
<hr></hr>
<Utilities/>
<hr/>
<QuizRadio/>
<hr/>
<SelectLabels/>
<hr/>
<AccessibleTable/>

</div>
  )
}
