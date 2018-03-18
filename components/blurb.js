import { columns, margins, type, columnList } from '../lib/styles'

export default ({ icon, paragraph, header }) => {
  return (
    <div>
      <h4>
        {icon && <img src={icon} />}
        {header}
      </h4>
      <p dangerouslySetInnerHTML={{ __html: paragraph }} />
      <style jsx>{`
      h4 {
        ${type.nimbusS}
        font-weight: bold;
      }
      img {
        vertical-align: middle;
        margin-right: ${margins.xs}px;
      }
      p {
        ${columns(5)}
        ${type.metaSerifM}
        margin-top: ${margins.xs}px;
      }
      @media screen and (max-width: 480px) {
        h4 {
          ${type.helveticaXL};
          ${!icon && 'padding-left: 33px'};
        }
        img {
          width: 32px;
          margin-right: ${margins.xs}px;
        }
        p {
          ${type.metaSerifS}
        }
      }
      `}</style>
    </div>
  )
}
