import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    // проверяем, что вернётся нужная часть стейта. Та, что отвечает за счётчик
    // если поменять название поля, тест упадёт
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
