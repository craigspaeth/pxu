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
        position: relative;
        top: -3px;
      }
      p {
        ${type.metaSerifS}
        margin-top: ${margins.xs + 5}px;
      }
      @media screen and (max-width: 650px) {
        p {
          max-width: none;
        }
      }
      @media screen and (max-width: 480px) {
        h4 {
          ${type.helveticaXL};
          padding-left: ${icon ? '0' : '28px'};
        }
        img {
          width: 32px;
          margin-right: ${margins.xs}px;
        }
      }
      `}</style>
    </div>
  )
}
