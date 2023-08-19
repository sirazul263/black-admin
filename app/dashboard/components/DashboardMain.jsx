"use client";
const DashboardMain = () => {
  return (
    <div className="p-4">
      <div>
        <h3 className="fw-bold mb-4 fs-24">Hi, Welcome Back</h3>
      </div>

      <div className="row mt-md-4">
        <div className="col-md-4 mb-3">
          <div className="radius-16 is-shadow p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="fw-semi-bold">8.2k BDT</h2>
                <p className="text-clr-gray fw-semi-bold mb-0 fs-14">
                  Total Order Amount
                </p>
              </div>
              <div>
                {" "}
                <img src="../img/amount.svg" alt="logo" className="fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="radius-16 is-shadow p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="fw-semi-bold">331k</h2>
                <p className="text-clr-gray fw-semi-bold mb-0 fs-14">
                  Total Order Count
                </p>
              </div>
              <div>
                {" "}
                <img src="../img/count.svg" alt="logo" className="fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="radius-16 is-shadow p-4">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="fw-semi-bold">124k </h2>
                <p className="text-clr-gray fw-semi-bold mb-0 fs-14">
                  Total User
                </p>
              </div>
              <div>
                {" "}
                <img src="../img/user.svg" alt="logo" className="fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardMain;
