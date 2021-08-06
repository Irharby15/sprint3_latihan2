const ambil_data = () => {
    fetch("https://api.nuget.org/v3/index.json")
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            var res = data;
            console.log(
                res.map((value, index) => {
                    console.log(
                        `${index + 1}`
                    );
                })
            );
        })
        .catch((err) => console.log(err));
};
ambil_data()