import { createAction, props } from '@ngrx/store';

import {StyleComponent} from '../models/style-components'

export const changeStyle = createAction('[StyleComponent] change style', props<{typeStyled:StyleComponent['typeStyled']}>());