// @ts-nocheck
import Link from '@/components/link'

export function Pagination({totalPages, currentPage}) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            rel="previous"
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
            }>
            <button rel="previous">Previous</button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            rel="next"
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button rel="next">Next</button>
          </Link>
        )}
      </nav>
    </div>
  )
}

export default Pagination

function test() {
  return (
    <div
      style="
  box-sizing: border-box;
  caret-color: rgb(72, 101, 137);
  color: rgb(72, 101, 137);
  font-family: Helvetica, sans-serif;
  font-size: 17px;
">
      <table
        width="500"
        cellspacing="0"
        cellpadding="0"
        border="0"
        style="box-sizing: border-box">
        <tbody>
          <tr style="box-sizing: border-box">
            <td style="box-sizing: border-box; margin: 0.1px">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="box-sizing: border-box">
                <tbody>
                  <tr style="box-sizing: border-box">
                    <td
                      valign="top"
                      style="
                  box-sizing: border-box;
                  padding: 0px 8px 0px 0px;
                  vertical-align: top;
                ">
                      <img
                        alt="Stoica Ovidiu"
                        width="50"
                        src="https://img.mysignature.io/p/3/8/c/38c7fb0c-1c47-5e56-8b13-998c48f30cea.png?time=1622186685"
                        style="
                    border-radius: 80px;
                    box-sizing: border-box;
                    vertical-align: middle;
                    max-width: 80px;
                    position: relative;
                    width: 80px;
                  "
                      />
                    </td>
                    <td
                      valign="top"
                      style="
                  box-sizing: border-box;
                  margin: 0.1px;
                  font-size: 1em;
                  padding: 0px 15px 0px 8px;
                  vertical-align: top;
                ">
                      <table
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                        style="
                    box-sizing: border-box;
                    font-family: Helvetica, sans-serif;
                    line-height: 1.4;
                    font-size: 15.300000190734863px;
                    color: rgb(0, 0, 1);
                  ">
                        <tbody>
                          <tr style="box-sizing: border-box">
                            <td style="box-sizing: border-box; margin: 0.1px">
                              <div style="box-sizing: border-box; font-size: 1em">
                                <font face="Helvetica">Ovidiu Stoica</font>
                              </div>
                            </td>
                          </tr>
                          <tr style="box-sizing: border-box">
                            <td
                              style="
                          box-sizing: border-box;
                          margin: 0.1px;
                          padding: 4px 0px;
                        ">
                              <div style="box-sizing: border-box">
                                <font face="Helvetica">Software Developer</font>
                              </div>
                            </td>
                          </tr>
                          <tr style="box-sizing: border-box">
                            <td style="box-sizing: border-box; margin: 0.1px">
                              <font face="Helvetica">
                                <span
                                  style="
                            box-sizing: border-box;
                            color: rgb(99, 204, 200);
                          ">
                                  phone:&nbsp;
                                </span>
                                &nbsp;
                                <span style="box-sizing: border-box">
                                  <a
                                    href="tel:+40745901643"
                                    style="
                              box-sizing: border-box;
                              transition: color 0.3s ease;
                              text-decoration: none;
                              color: rgb(0, 0, 1);
                            ">
                                    +40745901643
                                  </a>
                                </span>
                              </font>
                            </td>
                          </tr>
                          <tr style="box-sizing: border-box">
                            <td style="box-sizing: border-box; margin: 0.1px">
                              <font face="Helvetica">
                                <span
                                  style="
                            box-sizing: border-box;
                            color: rgb(99, 204, 200);
                          ">
                                  website:&nbsp;
                                </span>
                                &nbsp;
                                <span style="box-sizing: border-box">
                                  <a
                                    href="https://designvote.io"
                                    target="_blank"
                                    style="
                              box-sizing: border-box;
                              transition: color 0.3s ease;
                              text-decoration: none;
                              color: rgb(0, 0, 1);
                            ">
                                    o
                                  </a>
                                  vistoica.com
                                </span>
                              </font>
                            </td>
                          </tr>
                          <tr style="box-sizing: border-box">
                            <td style="box-sizing: border-box; margin: 0.1px">
                              <span
                                style="
                            box-sizing: border-box;
                            color: rgb(99, 204, 200);
                          ">
                                email:&nbsp;
                              </span>
                              &nbsp;
                              <span style="box-sizing: border-box">
                                <a
                                  href="mailto:ovidiu@designvote.io"
                                  target="_blank"
                                  style="
                              box-sizing: border-box;
                              transition: color 0.3s ease;
                              text-decoration: none;
                              color: rgb(0, 0, 1);
                            ">
                                  ovidiu
                                </a>
                                .stoica1094@gmail.com
                              </span>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
