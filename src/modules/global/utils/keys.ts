import { InjectionKey } from 'vue';
import { IGlobalMessage } from '@/modules/global/interfaces/types-global';

export const keyGStore = Symbol('keyGStore') as InjectionKey<IGlobalMessage>;
