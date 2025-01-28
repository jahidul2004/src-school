const Login = () => {
    return (
        <div className="mb-5 md:my-20">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <h1 className="text-center text-3xl md:text-4xl font-bold text-[#027afb] pt-4">
                    লগইন করুন
                </h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">ইমেইল</span>
                        </label>
                        <input
                            type="email"
                            placeholder="আপনার ইমেইল দিন"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">পাসওয়ার্ড</span>
                        </label>
                        <input
                            type="password"
                            placeholder="আপনার পাসওয়ার্ড দিন"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a
                                href="#"
                                className="label-text-alt link link-hover"
                            >
                                পাসওয়ার্ড ভূলে গেছেন?
                            </a>
                        </label>
                    </div>
                    <div className="form-control mt-6 flex justify-center">
                        <button className="btn btn-lg btn-primary bg-[#027afb] text-white border-none">
                            লগইন করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
