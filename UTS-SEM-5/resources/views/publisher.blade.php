@extends("welcome")

@section("konten")

<div class="container-fluid bg-secondary w-75 p-2 mb-4">
    <div class="">
        <h1 class="text-white">Publisher List</h1>
    </div>
</div>

<div class="row">

    @foreach ($publish as $publis)
        <div class="col-md-3 mb-4">
            <div class="border p-3">
                <p>{{ $publis->name }}</p>
                 <img class="w-100" src="{{ $publis->image }}" alt="">
                <p>{{ $publis->address }}</p>
                <a class="btn btn-primary" href="{{ url('/publisher_detail/' . $publis->id) }}">Detail</a>
            </div>
        </div>
    @endforeach

</div>

@endsection
