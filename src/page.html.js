export const html = `
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<div class="container">
    <div class="row">
        <div class="col text-uppercase text-center">
            <h1>news paper</h1>
        </div>
    </div>
    <div class="row">
        <div class="col"> 
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#Politics">Politics</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Tech">Tech</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Fun and Games">Fun&Games</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search what was lost..." aria-label="Search what was lost..." aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="submit" id="search-button">Search</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div id="newsList" class="col"></div>
        <div id="newsContent" class="col"></div>
    </div>
</div>
`;