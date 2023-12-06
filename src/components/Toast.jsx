export default function Toast(props) {
  return (
    <>
      <div className="absolute w-full z-30">
        <div className="flex justify-center">
          <div className="fixed  opacity-100">
            <h1 className="bg-white p-3 rounded-xl text-center">
              {props.message}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
