import dayjs from 'dayjs'

import { components } from '@/api/schema'
import { projectTagList } from '@/constants/project'

import logo from '../../public/logo.png'

const mock = (i: number) =>
    ({
        id: i,
        name: `テストプロジェクト${i}`,
        tag: projectTagList[Math.floor(Math.random() * projectTagList.length)],
        thumbnail: logo.src,
        description: [
            '説明文です説明文です説明文です説明文です',
            '説明文です説明文です説明文です説明文です説明文です説明文です説明文です説明文です',
            '説明文です説明文です説明文です説明文です',
            '説明文です説明文です説明文です説明文です説明文です説明文です説明文です説明文です説明文です説明文です説明文です説明文です',
        ].join('\n'),
        updated_at: dayjs().toISOString(),
        links: [],
    }) as const satisfies components['schemas']['Project']

export const mockProjects = [...new Array(10)]
    .map((_, i) => mock(i))
    .sort((a, b) => dayjs(b.updated_at).diff(dayjs(a.updated_at)))
