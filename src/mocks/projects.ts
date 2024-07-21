import dayjs from 'dayjs'

import { projectTagList } from '@/constants/project'
import { Project } from '@/lib/microcms'

import logo from '../../public/logo.png'

const mock = (i: number) =>
    ({
        id: `test${i}`,
        createdAt: '2024-07-13T03:57:05.965Z',
        updatedAt: '2024-07-13T03:57:30.079Z',
        name: `テストプロジェクト${i}`,
        tag: [projectTagList[Math.floor(Math.random() * projectTagList.length)]],
        thumbnail: {
            ...logo,
            url: logo.src,
        },
        description: '説明文です\n説明文です\n説明文です\n説明文です',
        publishedAt: dayjs()
            .subtract(Math.floor(Math.random() * 30), 'days')
            .format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
        revisedAt: dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
    }) satisfies Project

export const mockProjects = [...new Array(10)]
    .map((_, i) => mock(i))
    .sort((a, b) => dayjs(b.publishedAt).diff(dayjs(a.publishedAt)))
