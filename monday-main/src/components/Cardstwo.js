import React from 'react'

function Cardstwo() {
    return (
        <div>
            <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Fler artiklar</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use href="#toggles2"></use></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" className="btn btn-primary">
            Läs mer
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use href="#cpu-fill"></use></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" className="btn btn-primary">
            Läs mer
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
          <svg className="bi" width="1em" height="1em"><use href="#tools"></use></svg>
        </div>
        <div>
          <h2>Featured title</h2>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" className="btn btn-primary">
            Läs mer
          </a>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Cardstwo