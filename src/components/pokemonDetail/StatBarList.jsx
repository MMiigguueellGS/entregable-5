import { BarProgresStat } from "./BarProgresStat"

export const StatBarList = ({stats}) => {
  return (
    <section>
        <h2>Stats</h2>
        <section>
            {
                stats?.map((stat) => <BarProgresStat key={stat?.name} stat={stat}/>)
            }
        </section>
    </section>
  )
}