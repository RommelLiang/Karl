package com.karl.network.net.adapter_fatory


import com.karl.network.R
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.suspendCancellableCoroutine
import retrofit2.*
import java.lang.reflect.ParameterizedType
import java.lang.reflect.Type

class FlowCallAdapterFactory : CallAdapter.Factory() {

    companion object {
        val INSTANCE: FlowCallAdapterFactory by lazy(LazyThreadSafetyMode.NONE) {
            FlowCallAdapterFactory()
        }
    }

    override fun get(
        returnType: Type,
        annotations: Array<out Annotation>,
        retrofit: Retrofit
    ): CallAdapter<*, *>? {
        if (getRawType(returnType) != Flow::class.java) {
            return null
        }
        return FlowAdapter(getParameterUpperBound(0, returnType as ParameterizedType))
    }

    private inner class FlowAdapter(private val responseType: Type) : CallAdapter<R, Flow<Any>> {
        override fun responseType(): Type {
            return responseType
        }

        override fun adapt(call: Call<R>): Flow<R> {
            return flow {
                emit(
                    suspendCancellableCoroutine {
                        call.enqueue(object : Callback<R> {
                            override fun onResponse(call: Call<R>, response: Response<R>) {
                                it.resume(value = response.body()) {}
                            }

                            override fun onFailure(call: Call<R>, t: Throwable) {
                                it.resume(t) {}
                            }
                        })
                    }
                )
            }
        }

    }
}