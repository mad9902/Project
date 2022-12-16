@extends('welcome')

@section('konten')
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-4 page-detail-left">
                    <div class="image rounded shadow-sm">
                        <img class="w-100 m-12 just" src="{{ $publis->image }}" alt="">
                    </div>
                </div>
                <div class="col-md-8 px-4">
                    <h2>Name : {{ $publis->name }} </h2>
                    <h2>Email: {{ $publis->email }}</h2>
                    <h2>Address: {{ $publis->address }}</h2>
                    <h2>Phone: {{ $publis->phone }}</h2>
                </div>
            </div>
        </div>
    </div>
@endsection
