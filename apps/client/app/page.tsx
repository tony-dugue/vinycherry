'use client'
//import { ComponentExample } from '@/components/component-example'
import { useQuery } from '@apollo/client/react'
import { UsersDocument } from '@vinycherry/network/src/gql/generated'

export default function Page() {
  //return <ComponentExample />
  const { data } = useQuery(UsersDocument)

  return (
    <main>
      Hello
      <div>
        {data?.users.map((user) => (
          <div className="p-4 bg-amber-100 rounded-2xl" key={user.uid}>
            <div>{user.uid}</div>
            <div>{user.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}
