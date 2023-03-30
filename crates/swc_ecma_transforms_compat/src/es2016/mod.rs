use swc_ecma_visit::Fold;

pub use self::exponentiation::exponentiation;

mod exponentiation;

pub fn es2016() -> impl Fold {
    exponentiation()
}
