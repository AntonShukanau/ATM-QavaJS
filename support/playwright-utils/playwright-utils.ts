import { po } from '@qavajs/po-playwright';
import PoMap from '../../page_object';
import { Page } from '@playwright/test';
import memory from '@qavajs/memory';
import MemoryMap from '../../memory';

export const poRegister = async (page: Page) => {
  await po.init(page, { timeout: 10000 });
  await po.register(new PoMap());
}

export const memoryRegister = async () => {
  // @ts-ignore
  await memory.register(new MemoryMap());
}